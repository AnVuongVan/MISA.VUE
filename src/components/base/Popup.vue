<template>
    <div class="m-alert-popup">
        <div class="center">
            <span class="title">Xoa ban ghi</span>

            <p class="mb-4"> 
                <img src="http://100dayscss.com/codepen/alert.png" width="36" height="30" />
                <span>Ban co chac chan muon xoa nhung ban ghi nay hay khong?</span>
            </p>  
            
            <div class="m-popup-footer">
                <button class="cancel" @click="hidePopup">Huy</button>
                <button class="remove" @click="removeCustomer">Xoa</button>
            </div> 

            <span class="times" @click="hidePopup"></span>
        </div>  
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default ({
    name: 'Popup',
    props: ['listIds'],
    methods: {
        ...mapActions(['deleteCustomer']),
        //fuction to remove customer
        removeCustomer() {     
            this.listIds.forEach(id => this.deleteCustomer(id));
            this.$emit('isDeleted', true);  
            this.$emit("statusPopup", false); 
        },
        hidePopup() {
            //pass value to parent components (CustomerList)
            this.$emit("statusPopup", false);
        }
    }
})
</script>
