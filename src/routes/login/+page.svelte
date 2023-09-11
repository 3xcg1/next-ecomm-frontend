<script>
    //import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public'; //fetch api
    import { goto } from '$app/navigation';// redirect to whatever page required
    import { authenticateUser } from '../../utils/auth';
    import { showLoginAlert, loginSuccessAlert, warningAlert } from '../../utils/alert';
    let formErrors = {};// errors shown required field 
    let clicked = false;

  
    async function postSignIn() {
        goto('/')
        loginSuccessAlert();
    }
  
    async function promptLogin(evt) {
      evt.preventDefault();
      clicked = true;
      console.log(clicked)
  
      const userData = {
        email: evt.target['email'].value,
        password: evt.target['password'].value,
      };

      const res = await authenticateUser(userData.email, userData.password);
  
        if (res.success) {
            warningAlert.set(false)
            postSignIn();

        } else {
        showLoginAlert();
        clicked = false
        formErrors = res.data;
      }
    }

</script>

<h1 class="text-center text-xl">
    Login to Your Account 
</h1>

<div class="flex justify-center items-center mt-8">
    <form on:submit={promptLogin} class="w-1/3">
        <div class="form-control w-full">
            <label class="label" for="email">
                <span class="label-text">
                    Email
                </span>
            </label>
            <input type="text" name="email" placeholder="johndoe" class="input input-bordered w-full" />
              {#if 'email' in formErrors}
            <label class="label" for="email">
                <span class="label-text-alt text-red-500">
                    {formErrors['email'].message}
                </span>
            </label>
              {/if}
        </div>

  
        <div class="form-control w-full">
            <label class="label" for="password">
                <span class="label-text">
                    Password
                </span>
            </label>
            <input type="password" name="password" placeholder="" class="input input-bordered w-full" required />
              {#if 'password' in formErrors}
            <label class="label" for="password">
                <span class="label-text-alt text-red-500">
                    {formErrors['password'].message}
                </span>
            </label>
              {/if}
        </div>

        <div class="text-left">
            <a class="link-hover italic text-xs" href="/users/new">
                Already have an account? Click to login
            </a>
        </div>
  
        <div class="form-control w-full mt-4">
            {#if clicked}
                <button class="btn btn-md loading loading-spinner">
                    Login
                </button>
            {:else}
                <button class="btn">
                    Login
                </button>
            {/if}
        </div>
    </form>
</div>
