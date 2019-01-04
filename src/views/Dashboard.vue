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
            <div class="note-item">
                <div class="note-item-icon">
                    <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                </div>
                <div class="note-item-content">
                    <div class="name">Note1</div>
                    <div class="date">Created at 1/1/2019</div>
                </div>
            </div>
            <div class="note-item">
                <div class="note-item-icon">
                    <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                </div>
                <div class="note-item-content">
                    <div class="name">Note1</div>
                    <div class="date">Created at 1/1/2019</div>
                </div>
            </div>
            <div class="note-item">
                <div class="note-item-icon">
                    <img src="../assets/noteIcon.svg" alt="note-icon" class="img-fluid">
                </div>
                <div class="note-item-content">
                    <div class="name">Note 1</div>
                    <div class="date">Created at 1/1/2019</div>
                </div>
            </div>
            <div id="scroll" class="fab">
                <img src="../assets/arrow.svg" alt="arrow" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                note: {
                    title: null,
                    content: null
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
@import ../sass/variables
@import ../sass/dashboard

#create
    position: absolute
    bottom: -15px
    right: 15px
    img
        padding-left: 9px
        padding-top: 12px

#scroll
    position: absolute
    bottom: 10px
    right: 15px
    img
        padding-left: 13px
        padding-top: 15px

#note-title
    font-family: $pacifico
    font-size: 28px
    margin-top: 10px
    height: 50px

.line
    height: 1px
    width: 95%
    border-bottom: 2px solid rgba(0,0,0,0.25)
.form-control
    background: transparent
    border: 0
    outline: 0
    box-shadow: 0 0 0

</style>