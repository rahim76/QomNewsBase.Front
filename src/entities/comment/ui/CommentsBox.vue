<template>
  <div class="comments-container">

    <section class="comments-box">
      <h3 class="section-title">نظرات کاربران</h3>

      <ul class="comments-list">
        <li
          v-for="comment in getSelectedNewsComments?.comments"
          :key="comment.id"
          class="comment-card">
          
          <div class="comment-header">
            <div class="comment-date">
              <span>
                <i class="fa fa-calendar"></i>
                {{ comment.createdAtLocal }}
              </span>

              <span v-if="comment.updatedAtLocal">
                <i class="fa fa-refresh"></i>
                {{ comment.updatedAtLocal }}
              </span>
            </div>

            <div class="comment-actions">
              <button
                class="icon-btn edit-btn"
                @click="editCommentFn(comment.id)"
                v-show="editingCommentId !== comment.id">
                <i class="fa fa-pencil"></i>
              </button>

              <button
                class="icon-btn delete-btn"
                @click="deleteCommentFn(comment.id)"
                v-show="editingCommentId !== comment.id">
                <i class="fa fa-trash-o"></i>
              </button>
            </div>
          </div>

          <p class="comment-body" v-show="editingCommentId !== comment.id" >
            {{ comment.commentBody }}
          </p>

          <UpdateComment v-show="editingCommentId == comment.id" :commentId="comment.id" :commentBody="comment.commentBody" @close="editingCommentId = null" />

        </li>
      </ul>
    </section>

    <AddCommentForm/>

  </div>
</template>

<script setup>

import { useNewsStore } from '@/entities/news/model/newsStore';
import { storeToRefs } from 'pinia';
import { useDeleteComment } from '@/features/comment/deleteComment/model/useDeleteComment';
import { useShowNews } from '@/features/news/showNews/model/useShowNews.js';
import AddCommentForm from '@/features/comment/addComment/ui/AddCommentForm.vue';
import UpdateComment from '@/features/comment/updateComment/ui/UpdateComment.vue';
import { ref } from 'vue';

const newsStore = useNewsStore();

const { selectedNewsId } = storeToRefs(newsStore);

const { data: getSelectedNewsComments } = useShowNews(selectedNewsId)


//#region delete comment

const {
  mutate: mutateDeleteComment,
  isPending: isPendingDeleteComment,
  error: errorDeleteComment,
  isSuccess: isSuccessDeleteComment
} = useDeleteComment();

const deleteCommentFn = (commentId) => {

mutateDeleteComment(commentId);

}

//#endregion

//#region  update Comment

const editingCommentId = ref(null)

const editCommentFn = (id) => {
  editingCommentId.value = id
}

//#endregion

</script>

<style scoped src="../styles/commentsBox.css"></style>