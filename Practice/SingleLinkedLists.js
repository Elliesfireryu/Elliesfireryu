class Node {
    constructor(value, next=null){//this will make a node object
        this.val = value; //the node will have a value
        this.next = next; // this will allow you to set a next node
    }
}

class SLL {//this will connect the nodes together!!! the chain on the string of beads
    constructor(){
        this.head = null;
        this.size = 0;
    }
//Example****
    addEnd(val){
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            console.log("added " + val);
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            console.log("added " + val);
        }
        this.size++;
        console.log("size of SLL is " + this.size);
    }

//Example end

    displaySLL(){
        if (this.head === null){
            console.log("List is empty");
        } else {
            let current = this.head;
            while(current.next){
                console.log(current.val);
                current = current.next;
            }
            console.log(current.val);
            console.log("size of SLL is " + this.size);
        }

    }

    //Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(val) {
        const newNode = new Node(val);
        if(this.head ===null){
            this.head = newNode;
            console.log("added " + val);
        } else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            console.log("added " + val);
        }
        this.size++;
        console.log("size of SLL is " + this.size);
    }

    //Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if(this.head === null){
            console.log("The list is empty");
        } else {
            this.head = this.head.next;
        }
        this.size--;
        console.log(this.head);
        return this.head;//return new head node
    }

    //Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    removeFrontRV() {
        if(this.head === null){
            console.log("The list is empty");
        } else {
            this.head = this.head.next;
        }
        this.size--;
        console.log(this.head.val);
        return this.head.val;//return new head value
    }

    /************************************************************ */

    contains(val){
        let runner = this.head;
        if (this.head === null) {
            console.log(false);
            return false;
        } else {
            while(runner != null){
                if(runner.val === val) {
                    console.log(true);
                    return true;
                } else {
                runner = runner.next;
                }
            }                
            console.log(false);
            return false;
        }
    }

    /********************************************************** */

    length(){
        if (this.head === null){
            console.log("List is empty");
            return 0;
        } else {
            let current = this.head;
            let total = 1;//by the head not being empty you know current counts as one
            while(current.next){
                current = current.next;
                total++;
            }
            console.log(total);
        }
    }
    //Create method max() to return list’s largest val.
    max(){
        let max = this.head.val;
        let runner = this.head;
        if (this.head === null) {
            console.log("This list is empty");
            return;
        } else {
            while(runner != null){
                if(max < runner.val){
                    max = runner.val;
                }
                runner = runner.next;
            }                
            console.log("Max: " + max);
            return max;
        }
    }

    //Create method min() to return list’s lowest val.
    min(){
        let min = this.head.val;
        let runner = this.head;
        if (this.head === null) {
            console.log("This list is empty");
            return;
        } else {
            while(runner.next){
                if(min > runner.val){
                    min = runner.val;
                } else {
                    runner = runner.next;
                }
            }                
            console.log("Min: " + min);
            return min;
        }
    }

    //Create method avg() to return list’s average val.
    avg(){
        let sum = 0;
        let avg;
        let runner = this.head;
        if (this.head === null) {
            console.log("This list is empty");
            return;
        } else {
            let count = 0;
            while(runner != null){
                sum += runner.val;
                runner = runner.next;
                count++;
            }              
            avg = sum/count;
            console.log("Avg: " + avg);
            return avg;
        }
    }
}
/*
let list = new SLL();
list.addEnd("Ellie");
list.addEnd("Samael");
list.addEnd("Aisha");
list.addFront("Carlos");
list.displaySLL();
list.removeFront();
list.removeFrontRV();
list.contains("Aisha");
list.contains("Aih");
list.length();
list.addFront("Carlos");
list.addEnd("Ellie");
list.length();*/

let list2 = new SLL();
list2.displaySLL();
list2.addEnd(2);
list2.addFront(4);
list2.addEnd(2);
list2.addFront(4);
list2.avg();
list2.min();
list2.max();