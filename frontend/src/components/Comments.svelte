<script>
    import { onMount } from 'svelte';

    onMount(() => {
        var d = document, s = d.createElement('script');
        s.src = 'https://comments.apop.tech/assets/js/embed.js';
        s.async = false;
        s.defer = true;
        s.onload = function() {
            Coral.createStreamEmbed({
                id: "coral_thread",
                autoRender: true,
                rootURL: 'https://comments.apop.tech',
                // Uncomment these lines and replace with the ID of the
                // story's ID and URL from your CMS to provide the
                // tightest integration. Refer to our documentation at
                // https://docs.coralproject.net for all the configuration
                // options.
                // storyID: '${storyID}',
                // storyURL: '${storyURL}',
            });
        };
        (d.head || d.body).appendChild(s);
    })
</script>


<div id="coral_thread"></div>