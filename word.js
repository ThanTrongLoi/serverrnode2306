const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://admintest:rin123@cluster0.swfls.mongodb.net/servernode2306?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const Word = mongoose.model('Word', {
    en: {type: String, trim: true, unique: true, required: true, uppercase: true},
    vn: {type: String, trim: true, required: true, uppercase: true},
    isMemorized: {type: Boolean, default: false}
})

// Select
// Word.find({})
// .then(words => console.log(words))
// .catch(error => console.log(error))

// Insert
// const newWord = new Word({en: 'One', vn: 'Mot'})
// newWord.save()
// .then(word => console.log(word))
// .catch(error => console.log(error))

// Delete
// Word.findByIdAndRemove('5f25729cc1c5af51e920a383')
// .then(word => console.log(word))
// .catch(error => console.log(error))

// Update
Word.findByIdAndUpdate('5f2573acf669925222f0df4c', {isMemorized: false}, {new: true})
.then(word => console.log(word))
.catch(error => console.log(error))