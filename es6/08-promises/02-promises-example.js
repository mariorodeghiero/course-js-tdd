 var posts = fetch('https://willianjusten.com.br/search.json');

    // pending
    // resolved
    // rejected

    posts
        .then(data => data.json())
        .then(data => {
            throw new Error('ixi deu erro');
        })
        .catch(err => console.error(err));
