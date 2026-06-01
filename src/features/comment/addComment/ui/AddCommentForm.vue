<template>
    
<section class="comment-form-box">
      <h3 class="section-title">ثبت نظر جدید</h3>

      <form class="comment-form" @submit.prevent="submitComment">
        <div class="comment-form-group">
          <label for="commentText">
            متن نظر
          </label>

          <Field
            name="commentText"
            id="commentText"
            as="textarea"
            class="comment-form-textarea"
          />

          <ErrorMessage
            name="commentText"
            class="error-msg"
          />
        </div>

        <button
          type="submit"
          class="comment-form-button"
          :disabled="isPending"
        >
          {{ isPending ? 'در حال ارسال...' : 'ارسال نظر' }}
        </button>

        <p v-if="error" class="error-text">
          خطا در ارسال نظر
        </p>
      </form>
    </section>

</template>

<script setup>

import { Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useAddComment } from '../model/useAddComment';
import { useNewsStore } from '@/entities/news/model/newsStore';
import { storeToRefs } from 'pinia';

const newsStore = useNewsStore();
const { selectedNewsId } = storeToRefs(newsStore);


//#region send comment

const schema = yup.object({
  commentText: yup.string().required('متن نظر الزامی است'),
});

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
});

const { mutate:mutateSendComment, isPending, error } = useAddComment();

const submitComment = handleSubmit(async (values) => {

  const payload = {
          commentBody: values.commentText,
          newsId :selectedNewsId.value
        };

    mutateSendComment(payload, {
    onSuccess: () => {
      resetForm();
    },
  });

});

//#endregion

</script>

<style scoped src="../style/addCommentForm.css"></style>