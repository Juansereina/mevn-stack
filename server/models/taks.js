const schemaTask = new Schema({
    title: String,
    description: String
});
const task = mongoose.model('Task', schemaTask);