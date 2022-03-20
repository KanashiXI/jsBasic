let row = 5
let orderBy = 'desc'

asc(row, orderBy)

function asc(row, orderBy) {
    if (orderBy === 'asc') {
        for (let i=1; i<=row; i++){
            var text = ''
            for(let j=1; j<=i; j++){
                text += j.toString()
            }
            console.log(text)
        }
    } else if (orderBy === 'desc') {
        for (let i=row; i>=1; i--){
            text = ''
            for (let j=row; j>= i; j--) {
                text += j.toString()
            }
            console.log(text)
        }
    }
    
}