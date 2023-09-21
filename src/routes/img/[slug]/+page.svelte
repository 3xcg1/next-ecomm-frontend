<script>
    export let data;
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
    import { getUserId, getTokenFromLocalStorage, isLogged } from '../../../utils/auth.js';
    import { goto } from '$app/navigation';

    const userId = getUserId();// use for botton display

    async function checkout(id) {
        const resp = await fetch (PUBLIC_BACKEND_BASE_URL + '/checkout', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})

        });
        const res = await resp.json();
        goto(res)
    }

    async function deleteImage(id) {
    const token = getTokenFromLocalStorage();

    const resp = await fetch(PUBLIC_BACKEND_BASE_URL + `/image/${data.image.id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`
      },
      body: JSON. stringify({id})
    });
    console.log(resp.status)
    if (resp.status === 200) {
      goto('/');
    }
    else {
        goto(`/img/${data.image.id}`)
    }
  }

</script>

<!-- <body class="min-h-screen">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-auto pt-20 pb-10" style="width: 1200px;">
        <div class="card hover:transition delay-150 hover:-translate-y-10 shadow-xl shadow-sky-200 hover:shadow-indigo-600 flex flex-col justify-between">
                <figure style="height: 300px;" class="relative">
                    <img src={data.image.url} alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
                </figure>
            <div class="card-body flex-grow bg-gradient-to-rrounded-b-2xl">
                <h2 class="card-title text-lg font-bold mb-2">
                    {data.image.title}
                </h2>
                <p class="mb-4">
                    {data.image.description}
                </p>
                <p class="">
                    ${data.image.price/100} USD
                </p>
                <div class="card-actions justify-end mt-4">
                    <a href="/">
                    <button class="btn btn-primary hover:animate-pulse hover:btn-secondary">Delete</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</body> -->

<!-- <body class="min-h-screen">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-auto pt-20 pb-10" style="max-width: 1200px;">
        <div class="relative w-full h-full">
            <img src={data.image.url} alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
            <div class="absolute top-0 right-0 p-4 w-1/3 ">
                <h2 class="card-title text-lg font-bold mb-2">
                    {data.image.title}
                </h2>
                <p class="mb-4">
                    {data.image.description}
                </p>
                <p class="">
                    ${data.image.price/100} USD
                </p>
                <div class="mt-4">
                    <a href="/">
                        <button class="btn btn-primary hover:animate-pulse hover:btn-secondary">Delete</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</body> -->

<body class="min-h-screen flex items-center justify-center ">
    <div  classz="flex items-center">
        <div class="max-w-screen-lg p-8 space-x-4">
            <div class="relative flex-shrink-0 rounded-xl overflow-hidden w-1/2">
                <img src={data.image.url} alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
            </div>
            <div class="mt-2">
                {#if $isLogged && (userId === data.image.userId)}
                    <a href="/">
                        <button on:click={deleteImage(data.image.id)} class="btn btn-primary hover:animate-pulse hover:btn-secondary">
                            Delete
                        </button>
                    </a>
                {/if}
            </div>
        </div>
        <div class="lg:w-2/3 lg:mt-0 lg:mx-6 mb-40">
            <p class="text-3xl font-extrabold uppercase mb-5">
                {data.image.title}
            </p>
            <br>
            <p class="mt-3 mb-5 text-2xl 0">
                {data.image.description}
            </p>
            <br>
            <p class="mt-3 mb-5 text-2xl ">
                USD {data.image.price/100}
            </p>
            <br>
            <div class="flex items-center mt-6">
                <button on:click={checkout(data.image.id)} class="btn btn-primary hover:btn-accent" type="submit">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</body>

