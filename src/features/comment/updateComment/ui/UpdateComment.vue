<template>
  <div class="edit-area">

    <textarea
      class="form-control" v-model="editingText" rows="4" ></textarea>

    <div class="edit-actions">

      <button
        class="btn btn-warning"
        @click="submitEditComment" :disabled="isPendingUpdateComment">
        ذخیره تغییرات
      </button>

      <button
        class="btn btn-secondary" @click="cancelEditComment" >
        انصراف
      </button>

    </div>

    <div v-if="isErrorUpdateComment" class="text-danger mt-2">
      {{ errorUpdateComment?.message }}
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUpdateComment } from '../model/useUpdateComment'

const props = defineProps({
  commentId: {
    type: String,
    required: true,
  },
  commentBody: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

const editingText = ref(props.commentBody)

const {
  mutate: mutateUpdateComment,
  isPending: isPendingUpdateComment,
  isError: isErrorUpdateComment,
  error: errorUpdateComment,
} = useUpdateComment()

const submitEditComment = () => {
  mutateUpdateComment(
    {
      id: props.commentId,
      commentBody: editingText.value,
    },
    {
      onSuccess: () => {
        emit('close')
      },
    }
  )
}

const cancelEditComment = () => {
  emit('close')
}
</script>