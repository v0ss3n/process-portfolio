---
---
<!DOCTYPE html>
<html lang="en">

<head>
    <title>{{ site.author }} / {{ site.tagline }}</title>
    <meta name="author" content="{{ site.author }}">
    <meta name="description" content="{{ site.description }}">
    <meta name="keywords" content="{{ site.keywords }}">
    {% include head.html %}
</head>

<body>
    {% include header.html %}
    <main class="content blog-overview">
        <section class="intro">
            <div class="container">
                <p>Blog</p>
            </div>
        </section>
        <section class="projects">
            <div class="container">
                <ul class="blog-list">
                    <h2>Digital fabrication</h2>
                    {% for post in site.categories.fablab %}
                    <li>
                        <!-- <span>{{ post.date | date_to_string }}</span> &nbsp;  -->
                        <a
                            href="{{ site.baseurl }}{{ post.url }}">{{
                            post.title }}</a></li>
                    {% endfor %}
                </ul>

                <ul class="blog-list">
                    <h2>Textiles</h2>
                    {% for post in site.categories.textilelab %}
                    <li>
                        <!-- <span>{{ post.date | date_to_string }}</span> &nbsp;  -->
                        <a
                            href="{{ site.baseurl }}{{ post.url }}">{{
                            post.title }}</a></li>
                    {% endfor %}
                </ul>

                <ul class="blog-list">
                    <h2>Biomaterials</h2>
                    {% for post in site.categories.wetlab %}
                    <li>
                        <!-- <span>{{ post.date | date_to_string }}</span> &nbsp;  -->
                        <a
                            href="{{ site.baseurl }}{{ post.url }}">{{
                            post.title }}</a></li>
                    {% endfor %}
                </ul>

                <ul class="blog-list">
                    <h2>Other posts</h2>
                    {% for post in site.categories.other %}
                    <li>
                        <!-- <span>{{ post.date | date_to_string }}</span> &nbsp;  -->
                        <a
                            href="{{ site.baseurl }}{{ post.url }}">{{
                            post.title }}</a></li>
                    {% endfor %}
                </ul>
<!--                 
                <ul class="projects-list">
                    {% for item in site.categories.blog %}
                    <li>
                         <div class="img-wrapper">
									<img src="{{ item.project.logo | prepend: site.baseurl }}" alt="{{ item.project.title }}" />
								</div>
                        <h3>
                            {% assign date_format = "%Y-%m-%d" %}
                            {{ post.date | date: date_format }}
                            <a href="{{ item.url | prepend: site.baseurl }}">{{ item.title | escape }}</a>
                        </h3>
                        </a>
                    </li>
                    {% endfor %}
                </ul> -->
            </div>
        </section>
    </main>
    {% include footer.html %}
    <script src="{{ " /assets/scripts/vendor/scrollreveal.min.js" | prepend: site.baseurl }}"></script>
    <script src="{{ " /assets/scripts/home.js" | prepend: site.baseurl }}"></script>
</body>

</html>