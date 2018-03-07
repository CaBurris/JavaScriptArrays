var playList= [
    'I Did It My Way',
     'Respect',
     'Imagine',
     'Born to Run',
     'Louie Louie',
     'Maybellene'
 ];

 function print(message) {
   document.write(message);
 }

function printList( list) {
    var listHTML = '<ol>';
    for ( var i = 0; i < list.length; i += 1 ) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}
printList(playList);







/*---Notes---*/
/*
playList.push('I did It My Way'); //adds to the end of the array
playList.push('Respect', 'Imagine');
playList.unshift('Born to Run'); //adds to the beginning of the array
playList.unshift('Louie Louie', 'Maybellene' );
printList ( playList );


playList.pop();  //removes and returns last item. Can use it to retrieve last item

playList.shift(); //removes and returns item from beginning

*/
