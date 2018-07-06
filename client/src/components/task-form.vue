<template>
 <v-layout>
    <v-flex xs6 sm6 offset-sm3>
<v-card>
  <v-card-title><v-spacer>
    </v-spacer>
      <h2>What to do</h2>
    <v-spacer></v-spacer>
    </v-card-title>
   <v-divider></v-divider>
  <v-card-text>
  <form>
    <v-text-field
      v-model="title"
      :error-messages="titleErrors"
      :counter="25"
      label="Title"
      required
      @input="$v.title.$touch()"
      @blur="$v.title.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="description"
      :error-messages="descriptionErrors"
      label="Description"
      required
      @input="$v.description.$touch()"
      @blur="$v.description.$touch()"
    ></v-text-field>
    <v-btn @click="submit" color="yellow">submit</v-btn>
    <v-btn @click="clear" color="yellow">clear</v-btn>
  </form>
  </v-card-text>
  </v-card>
     </v-flex>
  </v-layout>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength,  } from 'vuelidate/lib/validators'

  export default {
    props:{
      updateItem: Object
    },
    mixins: [validationMixin],
    validations: {
      title: { required, maxLength: maxLength(25) },
      description: { required },
    },
    data: () => ({
      title: '',
      description: '',
      idTemp:''
    }),
    watch: {
      updateItem(value) {       
        this.idTemp = value._id,
        this.title = value.title;
        this.description = value.description;
      }
    },
    computed: {
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.maxLength && errors.push('Title must be at most 25 characters long')
        !this.$v.title.required && errors.push('Title is required.')
        return errors
      },
      descriptionErrors () {
        const errors = []
        if (!this.$v.description.$dirty) return errors
        !this.$v.description.required && errors.push('description is required')
        return errors
      }
    },
    methods: {
      submit () {
         this.$emit('addTask', {
           _id: this.idTemp,
           title:this.$v.title.$model, 
           description:this.$v.description.$model
         })
        this.$v.$touch()
        this.clear();
      },
      clear () {
        this.$v.$reset()
        this.title = ''
        this.description = ''
      }
    }
  }
</script>