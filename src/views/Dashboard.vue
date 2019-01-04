<template>
    <div id="dashboard">
        <div id="note">
            <input type="text" id="note-title" class="form-control" placeholder="Title">
            <div class="line d-block mx-auto"></div>
            <textarea cols="30" rows="10" class="form-control" v-model="note.content" placeholder="Your note goes here"></textarea>
            <div id="create" class="fab">
                <img src="../assets/Tick.svg" alt="tickMark" class="img-fluid">
            </div>
        </div>
        <div id="note-list">
            <div class="note-item" @click="showModal = true" v-for="note in notes.slice(0,3)">
                <div class="note-item-icon">
                    <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                </div>
                <div class="note-item-content">
                    <div class="name">{{note.title}}</div>
                    <div class="date">Created at {{note.created_at}}</div>
                </div>
            </div>
            <div id="scroll" class="fab" @click="$router.push('notes')">
                <img src="../assets/arrow.svg" alt="arrow" class="img-fluid">
            </div>
        </div>
        <noteModal v-if="showModal" @closeModal="showModal = false"></noteModal>
    </div>
</template>

<script>

import noteModal from '../components/noteModal'

    export default {
        name: "Dashboard",
        components: {
            'noteModal': noteModal
        },
        data() {
            return {
                showModal: false,
                note: {
                  title: null,
                  content: null
                },
                notes: []
            }
        },
        created() {
            let token = this.$store.state.user.token
            this.$http.get('http://todo.test/notes', {
                headers: {
                    authorization: 'Bearer ' + token
                }
            }).then(function(response) {
                this.notes = response.body.notes
            })
        }
    }
</script>

<style lang="sass" scoped>
@import ../sass/variables
@import ../sass/dashboard
</style>