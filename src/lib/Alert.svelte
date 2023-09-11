<script>
    // import alert stores from alert.js
    import { warningAlert } from "../utils/alert";
    import { alertMessage } from "../utils/alert";
    import { successAlert } from "../utils/alert";
    
</script>



{#if $warningAlert}
<div
    class="fixed top-[110px] inset-x-0.5 z-10 container alert alert-warning shadow-lg max-w-sm mx-auto rounded-box flex justify-center animate-bounce"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-current flex-shrink-0 w-6 h-6"
        ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
    >
    <span class="text-center font-bold">{$alertMessage}</span>
</div>
{/if}

{#if $successAlert}
<div
    class="fixed top-[110px] inset-x-0.5 z-10 container alert alert-success shadow-lg max-w-xs mx-auto mb-2 rounded-box flex justify-center animate-bounce"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
    >
    <span class="text-center font-bold">{$alertMessage}</span>
</div>
{/if}

