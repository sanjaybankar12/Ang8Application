import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'nameFilter'
})
export class UserPipe implements PipeTransform {

    transform(value:any[], searchVal:string) {
        if(!searchVal) {
            return value;            
        }
        return value.filter((user:any) => 
            user.name.toLowerCase().includes(searchVal.trim().toLowerCase())
        );
    }
}