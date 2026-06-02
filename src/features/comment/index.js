// api
export * from './api/commentApi'

// model (keys, types, store)
export * from './model/keys'
export * from './store/commentStore'

export { default as AddCommentForm } from './widgets/AddCommentForm/AddCommentForm.vue'
export { default as CommentsBox } from './widgets/CommentsBox/CommentsBox.vue'
export { default as UpdateComment } from './widgets/UpdateComment/UpdateComment.vue'
