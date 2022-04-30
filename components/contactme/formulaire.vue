<template>
  <div>
    <div class="container">
    <div class="row">
        <!-- <h1>Contact me</h1> -->
    </div>
    <div class="row love-hear">
        <h4 style="text-align:center ">I'd love to hear from you!</h4>
    </div>
    <div class="loader" v-if="sendingMessage">
      <SendMessage/>
    </div>

    <div class="errorMessage message-after-sending" v-if="errorMessage">
      {{errorMessageText}}
    </div>

    <div class="successMessage message-after-sending" v-if="successMessage">
      Thank you, your message has been sent
    </div>

    <div class="row input-container">
      <div class="col-md-6 col-xs-6 col-sm-12">
          <div class="styled-input">
            <input type="text" required v-model="fullName"/>
            <label>Name</label> 
          </div>
        </div>
        <div class="col-md-6 col-xs-6 col-sm-12">
          <div class="styled-input" style="float:right;">
            <input type="email"  v-model="email" required/>
            <label>Email</label> 
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="styled-input wide">
            <input type="text" required v-model="subject" />
            <label>Subject</label> 
          </div>
        </div>
        <div class="col-xs-12 col-sm-12">
          <div class="styled-input wide">
            <textarea required v-model="message"></textarea>
            <label>Message</label>
          </div>
        </div>
        <div class="send-btn row">
          <div class="btn-lrg submit-btn" @click.prevent="send">Send Message</div>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
import SendMessage from '../loader/sendMessage.vue';

export default {
  components:{SendMessage},
  data(){ 
    return {
      sendingMessage:false,
      successMessage:false,
      errorMessage:false,
      errorMessageText:null,
      email:null,
      message:null,
      subject:null,
      fullName:null
    }
  },
  methods:{
    send(){
      this.errorMessage = false;
      this.successMessage = false;
      if (!this.checkFieldsOk()){
        this.errorMessage = true;
        this.errorMessageText = " Please fill in all fields !"
        setTimeout(()=>{
          this.errorMessage=false
        }, 10000)
        return;
      }
      this.sendingMessage=true;
      this.$mail.send({
        from: this.email, 
        subject: `PORTFOLIO - ${this.subject} -  from ${this.email} `,
        text: `- Name : ${this.fullName}\n - Message : ${this.message}`,
        to: process.env.MY_EMAIL
      })
      .then(() => {
        this.sendingMessage=false;
        this.successMessage = true;
        setTimeout(()=>{
          this.successMessage=false
          this.clearFields();
        }, 5000)
      }).catch((err) => {
        this.errorMessage = true;
        this.sendingMessage=false;
        this.errorMessageText = "Message not sent ! Please retry later..."
        console.log(err)  
      });  
    },
    checkFieldsOk(){
      if (!this.fullName || !this.email || !this.message || !this.subject){
        return false;
      }
      return true;
    },
    clearFields(){
      this.email = null;
      this.fullName = null;
      this.subject = null;
      this.message = null;
    }
  }
}
</script>

<style scoped>
@import url('~/assets/css/contact-form.css');
.loader{
  height:auto;
}

.message-after-sending{
  padding: 30px 5px;
  margin:0 auto;
  font-size: 11pt;
  width: 70%;
  border-radius: 4px;
}

.errorMessage{
  border: solid .1px #c28d8d5f;
  background-color: #c28d8d5f;
  color: #edc4c4;
}


.successMessage{
  border: solid .1px #284945e1;
  background-color: #67aba25f;
  color: #bfe6e0;
}

</style>