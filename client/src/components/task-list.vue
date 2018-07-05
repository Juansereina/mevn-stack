<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md4
        lg3
      >
        <v-card>
          <v-card-title><h3>{{ props.item.title }}</h3></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
             <v-list-tile>
              <v-list-tile-content>Description:</v-list-tile-content>
              <v-list-tile-content>{{ props.item.description }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-card-actions>
            <v-btn flat color="orange">Update</v-btn>
            <v-btn flat color="orange">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    props: {
    items: Array
   },
    data: () => ({
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      }
    })
  }
</script>