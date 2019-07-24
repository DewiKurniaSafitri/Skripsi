<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h2>Add Equipment</h2>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Machine Id </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Name </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Status </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Location </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Priority </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Downtime </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Costdate </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Price </label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Equipment"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
    name: 'Equipment'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

input[type=text]{
  width: 100%;
  padding: 12px;
  border: 1px solid #35495E;
  border-radius: 4px;
  resize: vertical;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
input[type=submit] {
  width: 80%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}

</style>
