document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        {
            title: 'Beating the Averages',
            url: 'http://www.paulgraham.com/avg.html',
            description: 'An insightful essay on the power of using Lisp for programming.',
            image: 'images/An_insightful_essay_on_the_power_of_using_Lisp_for.png'
        },
        {
            title: 'Hackers and Painters',
            url: 'http://www.paulgraham.com/hp.html',
            description: 'A comparison between hackers and painters, exploring creativity.',
            image: 'images/A_comparison_between_hackers_and_painters,_explori.png'
        },
        {
            title: 'How to Start a Startup',
            url: 'http://www.paulgraham.com/start.html',
            description: 'Essential advice for budding entrepreneurs on how to start a successful startup.',
            image: 'images/Essential_advice_for_budding_entrepreneurs_on_how_.png'
        },
        {
            title: 'Do Things that Don\'t Scale',
            url: 'http://www.paulgraham.com/ds.html',
            description: 'An essay about the importance of doing things that don\'t scale in the early stages of a startup.',
            image: 'images/An_essay_about_the_importance_of_doing_things_that.png'
        },
        {
            title: 'The Hardware Renaissance',
            url: 'http://www.paulgraham.com/hw.html',
            description: 'Discusses the resurgence of interest and innovation in hardware startups.',
            image: 'images/Discusses_the_resurgence_of_interest_and_innovatio.png'
        }
    ];

    const featuredContainer = document.getElementById('featured-articles');
    const scrollContainer = document.getElementById('scroll-container');
    const articleList = document.getElementById('article-list');

    articles.forEach((article, index) => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article transform transition duration-500 hover:scale-105';

        const articleImage = document.createElement('img');
        articleImage.src = article.image;
        articleImage.alt = article.title;

        const articleContent = document.createElement('div');
        articleContent.className = 'article-content';

        const articleTitle = document.createElement('h2');
        articleTitle.textContent = article.title;

        const articleDescription = document.createElement('p');
        articleDescription.textContent = article.description;

        const articleLink = document.createElement('a');
        articleLink.href = article.url;
        articleLink.textContent = 'Read More';
        articleLink.target = '_blank';

        articleContent.appendChild(articleTitle);
        articleContent.appendChild(articleDescription);
        articleContent.appendChild(articleLink);

        articleDiv.appendChild(articleImage);
        articleDiv.appendChild(articleContent);

        if (index < 3 && featuredContainer) {
            featuredContainer.appendChild(articleDiv);
        }

        if (scrollContainer) {
            scrollContainer.appendChild(articleDiv);
        }

        if (articleList) {
            articleList.appendChild(articleDiv);
        }
    });

    // Add GSAP animations
    gsap.from('.article', { opacity: 0, y: 50, stagger: 0.2, duration: 1, ease: 'power4.out' });
});
