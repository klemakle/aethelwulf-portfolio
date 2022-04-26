<template>
  <div>
    <div class="container">
    <div class="row">
        <!-- <h1>Contact me</h1> -->
    </div>
    <div class="row love-hear">
        <h4 style="text-align:center">I'd love to hear from you!</h4>
    </div>
    <div class="row input-container">
      <div class="col-md-6 col-xs-6 col-sm-12">
          <div class="styled-input">
            <input type="text" required />
            <label>Name</label> 
          </div>
        </div>
        <div class="col-md-6 col-xs-6 col-sm-12">
          <div class="styled-input" style="float:right;">
            <input type="text" required />
            <label>Email</label> 
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="styled-input wide">
            <input type="text" required />
            <label>Subject</label> 
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div class="send-btn row">
          <div class="btn-lrg submit-btn">Send Message</div>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('~/assets/css/contact-form.css');

</style>