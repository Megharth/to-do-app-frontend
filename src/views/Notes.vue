<template>
    <transition name="slide-up">
        <div id="notes">
            <div class="header">
                <div class="heading">Notes</div>
                <div id="scroll" class="fab" @click="$router.push('dashboard')">
                    <img src="../assets/arrow_up.svg" alt="scrollUp" class="img-fluid">
                </div>
            </div>
            <div id="note-list">
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = !showModal">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note 1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note 1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note 1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note 1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note 1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note 1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
                <div class="note-item" @click="showModal = true">
                    <div class="note-item-icon">
                        <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                    </div>
                    <div class="note-item-content">
                        <div class="name">Note 1</div>
                        <div class="date">Created at 1/1/2019</div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="edit">
                    <img src="../assets/Checkbox.png" alt="editBtn" class="img-fluid">
                </div>
                <div class="delete">
                    <img src="../assets/Trash.png" alt="deleteBtn" class="img-fluid">
                </div>
            </div>
            <noteModal v-if="showModal" @closeModal="showModal = false"></noteModal>
        </div>
    </transition>
</template>

<script>
import noteModal from '../components/noteModal'

    export default {
        name: "Notes",
        components: {
            noteModal
        },
        data() {
            return {
                showModal: false
            }
        }
    }
</script>

<style lang="sass" scoped>
@import ../sass/notes

.footer
    position: fixed
    bottom: 0
    background: #09BC8A
    height: 8vh
    width: 100%
    border-top-left-radius: 10px
    border-top-right-radius: 10px
    box-shadow: 0 -4px 4px rgba(0,0,0,0.25)
    .edit
        display: inline-block
        float: left
        padding: 10px
    .delete
        display: inline-block
        float: right
        padding: 10px

.slide-up-enter-active
    animation: slide-up 0.3s ease-out forwards

.slide-up-leave-active
    animation: slide-up 0.3s ease-out forwards reverse

@keyframes slide-up
    0%
        transform: translateY(1000px)
        opacity: 0
    100%
        transform: translateY(0)
        opacity: 1
</style>