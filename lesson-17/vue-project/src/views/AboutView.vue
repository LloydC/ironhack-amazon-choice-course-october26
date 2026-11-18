<script setup>
    import { ref } from 'vue'
    import BlogPost from '../components/BlogPost.vue'
    const blogs = ref([
        { title: 'My first blog post', description: 'This is the description for my first blog post.', url: 'https://example.com/blog/1' },
        { title: 'My second blog post', description: 'This is the description for my second blog post.', url: 'https://example.com/blog/2' },
        { title: 'My third blog post', description: 'This is the description for my third blog post.', url: 'https://example.com/blog/3' },
        { title: 'My fourth blog post', description: 'This is the description for my fourth blog post.', url: 'https://example.com/blog/4' },
        { title: 'My fifth blog post', description: 'This is the description for my fifth blog post.', url: 'https://example.com/blog/6' }
    ])
</script>
<template>
    <div class="about">
        <h1>About</h1>

        <BlogPost v-for="blog in blogs" :key="blog.title"  :title="blog.title" :description="blog.description" :url="blog.url" />
    </div>
</template>