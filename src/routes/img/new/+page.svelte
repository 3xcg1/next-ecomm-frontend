<script>
    import { uploadMedia } from '../../../utils/s3-uploader.js';
	import { goto } from '$app/navigation';
	import { getTokenFromLocalStorage } from '../../../utils/auth.js';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { get } from 'svelte/store';

    let formErrors = {};
	let clicked = false;
	
	function postUpload () {
		goto('/');
	}

    async function uploadImage(evt) {
		evt.preventDefault();
		clicked = true;
		const [fileName, fileUrl] = await uploadMedia(evt.target['file'].files[0]);
      	const token =getTokenFromLocalStorage();

		const imageData = {
			title:evt.target['title'].value,
			description:evt.target['description'].value,
			price: parseInt(evt.target['price'].value*100),
			url: fileUrl
		};
      
		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/image', {
			method: 'POST',
			mode: 'cors',
			headers: {
          'Content-Type': 'application/json',
          Authorization : `Bearer ${token}`
		},
		body: JSON.stringify(imageData)
		});

		if (resp.status == 200) {
			postUpload()
		}

		
	}
</script>


<!-- dint put in this in lws. PUT this were I want to upload img -->
<svelte:head> 
  <script src="/aws-sdk-s3.min.js"></script>
</svelte:head>

<h1 class="text-center text-xl">
    Upload Your Image
</h1>

<div class="flex justify-center items-center mt-8">
	<form on:submit={uploadImage} class="w-1/3">
		<div class="form-control w-full">
			<label class="label" for="title">
				<span class="label-text"> 
                    Title 
                </span>
			</label>
			<input
				type="text"
				name="title"
				placeholder="Junior software programmer, etc."
				class="input input-bordered w-full"
			/>
			{#if 'title' in formErrors}
				<label class="label" for="title">
					<span class="label-text-alt text-red-500">
						{formErrors['title'].message}
					</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-full">
			<label class="label" for="description">
				<span class="label-text"> 
                    Description
                </span>
			</label>
			<input
				type="description"
				name="description"
				placeholder="bla bla bla"
				class="input input-bordered w-full"
				required
			/>
			{#if 'description' in formErrors}
				<label class="label" for="description">
					<span class="label-text-alt text-red-500">
						{formErrors['description'].message}
					</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-full">
			<label class="label" for="price">
				<span class="label-text"> 
                    Price 
                </span>
			</label>
			<input
				type="price"
				name="price"
				placeholder="RM 100000"
				class="input input-bordered w-full"
				required
			/>
			{#if 'price' in formErrors}
				<label class="label" for="price">
					<span class="label-text-alt text-red-500">
						{formErrors['price'].message}
					</span>
				</label>
			{/if}
		</div>

		<div class="form-control w-full mt-2">
			<input type="file" name="file" />
			{#if 'file' in formErrors}
			  <label class="label" for="file">
				<span class="label-text-alt text-red-500">
					{formErrors['file']}
				</span>
			  </label>
			{/if}
		  </div>
		  <div class="form-control w-full mt-4">
			<button class="btn btn-md">
				Upload
			</button>
		  </div>

	</form>
</div>
