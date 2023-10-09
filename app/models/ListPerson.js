const BASE_URL = "https://651d525844e393af2d598dd0.mockapi.io/person";


class ListPerson {
    
    // mảng đối tượng này chứa các đối tượng khác nhau
    constructor(
        _id,
        _name,
        _address,
        _email,
        _type,
        _toan,
        _ly,
        _hoa,
        _day,
        _salary,
        _congTy,
        _hoaDon,
        _danhGia   
        ) {
        this.id = _id;
        this.namePerson = _name;
        this.address = _address;
        this.email = _email;
        this.type = _type;
        this.diemToan = _toan;
        this.diemLy = _ly;
        this.diemHoa = _hoa;
        this.day = _day;
        this.salary = _salary;
        this.congTy = _congTy;
        this.hoaDon = _hoaDon;
        this.danhGia = _danhGia;
        
        this.person = [];
    }
    
    // Phương thức thêm product, hàm này chỉ có chức năng duy nhất là thêm sản phẩm
    addPerson = (sp) => {
        this.person.push(sp);
    };

}

// Class for creating multi inheritance.
// class multi
// {
// 	// Inherit method to create base classes.
// 	static inherit(..._bases)
// 	{
// 		class classes {

// 			// The base classes
//   			get base() { return _bases; }

// 			constructor(..._args)
// 			{
// 				var index = 0;

// 				for (let b of this.base) 
// 				{
// 					let obj = new b(_args[index++]);
//    					multi.copy(this, obj);
// 				}
// 			}
		
// 		}

// 		// Copy over properties and methods
// 		for (let base of _bases) 
// 		{
//    			multi.copy(classes, base);
//    			multi.copy(classes.prototype, base.prototype);
// 		}

// 		return classes;
// 	}

// 	// Copies the properties from one class to another
// 	static copy(_target, _source) 
// 	{
//     		for (let key of Reflect.ownKeys(_source)) 
// 			{
//         		if (key !== "constructor" && key !== "prototype" && key !== "name") 
// 				{
// 	        	    let desc = Object.getOwnPropertyDescriptor(_source, key);
// 	        	    Object.defineProperty(_target, key, desc);
//         		}
//     		}
// 	}
// }

// // class Dog{
// // 	constructor(hands){
// //   	this.hand = hands;
// //   }
  
// //   callHandDog(){
// //   	console.log('callHandDog>>', this.hand);
// //   }
// // }

// // class Pig{
// // 	constructor(hands){
// //   	this.hand = hands;
// //   }
  
// //   callHandPig(){
// //   	console.log('callHandPig>>', this.hand);
// //   }
  
// // }


// class ListPerson extends multi.inherit(Student, Employee, Customer){
// 	constructor(_id, _name, _address, _email, _toan, _ly, _hoa, _day, _salary, _congTy, _hoaDon, _danhGia){
//     super(_id, _name, _address, _email);
  	
//   }
  
//   init(){
//   	super.callHandPig();
//     super.callHandDog();
//   }
  
// }

// const _animal = new Animal(4);
// _animal.init();
//(index):97 callHandPig>> 4
//(index):87 callHandDog>> 4




