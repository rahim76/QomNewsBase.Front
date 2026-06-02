<template>

   <!-- <Modal/> -->
               
      <div class="clear-fix"></div>

      <div class="main-content">

         <LatestPosts />         
         
         <div class="container-fluid">

            <div class="row">

               <div class="col-md-3">
                 <SidebarItem/>
               </div>

               <div class="col-md-6">
                  <div class="content-wrapper">

                     <MostViewsNewsWidget />                     
                     <!-- <MoviesAndVideos/> -->

                  </div>
               </div>
               <LeftSidebar/>
            </div>
         </div>
         <div class="clear-fix"></div>
         
      </div>
      <div class="clear-fix"></div>
      

</template>

<script setup>

import LatestPosts from '@/widgets/latestPosts/ui/LatestPosts.vue';
import SidebarItem from '@/widgets/sidebar/ui/SidebarItem.vue';
import MostViewsNewsWidget from '@/widgets/mostViewsNews/ui/MostViewsNewsWidget.vue';
import LeftSidebar from '@/widgets/sidebar/ui/LeftSidebar.vue';

</script>