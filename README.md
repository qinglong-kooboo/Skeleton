# Skeleton

a demo to show how to add skeleton screens to a web page

## Motivation/Background
Skeleton screens are blank pages that are progressively populated with content, such as text and images, as they become available (i.e. when network latency allows). Grey or neutral-toned filled shapes, commonly called placeholders, meet the user instantly upon user interaction with calls to action or links. The placeholders (the so-called “bones” of the skeleton) are then replaced with the actual site content, and the illusion is complete. That’s what skeleton screens do: create the illusion of an instant transition.

## Detailed design
First step, create component Skeleton.vue. For the sake of simplicity, I use images to serve as the content of the skeleton in the demo.
Second step, create entry file entry-skeleton.js. Mount the skeleton template on the vue instance.
Third step, create webpack config file webpack.skeleton.conf.js. Don't forget to declare vue-skeleton-webpack-plugin in webpack.dev.conf.js and webpack.prod.conf.js.
P.S. If there are different pages that require different skeleton, you need to configure them in the router.Like this, router: {
        mode: 'hash',
        routes: [
          {
            path: '/index',
            skeletonId: 'Skeleton1'
          },
          {
            path: '/test',
            skeletonId: 'Skeleton2'
          },
        ]
      }
