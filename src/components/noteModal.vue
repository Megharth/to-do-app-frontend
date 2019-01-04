<template>
    <transition name="scale-in">
        <div id="noteModal">
            <div class="note">
                <div class="title">
                    <input type="text" class="form-control" v-model="note.title">
                </div>
                <div class="content">
                <textarea v-model="note.content"
                          cols="30"
                          rows="15"
                          class="form-control"></textarea>
                </div>
                <div id="close" class="fab">
                    <img src="../assets/cross.svg" alt="closeBtn" class="img-fluid" @click="closeModal">
                </div>
                <div id="update" class="fab">
                    <img src="../assets/Tick.svg" alt="tickMark" class="img-fluid">
                </div>
            </div>
        </div>
    </transition>
</template>


<script>
    export default {
        name: "noteModal",
        data() {
            return {
                note: {
                    title: 'Lorem Ipsum',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus mollis nisl id interdum. Pellentesque quis massa ac mauris suscipit egestas eu congue urna. Nulla et ligula commodo, iaculis justo et, accumsan lorem. Praesent in massa metus. Proin vestibulum ligula magna, a malesuada nisi congue ac. Mauris vestibulum libero tellus, nec bibendum sapien eleifend nec. Mauris porta risus dui, vitae porttitor elit rhoncus nec.\n' +
                        '                    Ut volutpat rutrum tellus, sed bibendum est maximus quis. Integer eu lorem molestie, blandit nibh ac, efficitur lectus. Aenean viverra lacus vel nibh eleifend tempus. Curabitur non est gravida, dignissim magna ac, feugiat ipsum. Morbi congue est nec ipsum molestie posuere.'
                }
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModal')
            }
        }
    }
</script>

<style lang="sass" scoped>
@import ../sass/noteModal

.scale-in-enter-active
    animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)

.scale-in-leave-active
    animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse
@keyframes scale-in
    0%
        transform: scale(0)
        opacity: 1
        background: transparent
    100%
        transform: scale(1)
        opacity: 1
        background: transparent

</style>