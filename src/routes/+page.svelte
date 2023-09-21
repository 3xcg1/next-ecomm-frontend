<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
  import { getTokenFromLocalStorage } from '../utils/auth.js';


  export let data;

  
</script>

<body class="min-h-screen flex items-center justify-center">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-auto pt-20 pb-10" style="max-width: 1200px;">
    {#each data.images as image}
      <div class="card hover:transition delay-150 hover:-translate-y-10 shadow-xl shadow-sky-200 hover:shadow-indigo-600 flex flex-col">
        <figure style="height: 300px;" class="relative">
          <img src={image.url} alt="" class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
        </figure>
        <div class="card-body bg-gradient-to-rrounded-b-2xl p-4">
          <div class="flex flex-col justify-between h-full">
            <div>
              <h2 class="card-title text-lg font-bold mb-2">{image.title}</h2>
              <p class="mb-4">{image.description}</p>
            </div>
            <div class="mt-auto">
              <p class="">${image.price / 100} USD</p>
              <div class="card-actions justify-end mt-4">
                <a href="/img/{image.id}">
                  <button class="btn btn-primary hover:animate-pulse hover:btn-secondary">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</body>


