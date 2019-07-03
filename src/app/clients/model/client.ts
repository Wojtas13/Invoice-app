export interface FormItem {
    firstName: string;
    lastName: string;
    nipNumber: string;
}

export class ClientsItemFactory {
    newClientsItem(): FormItem {
        return {
            firstName: '',
            lastName: '',
            nipNumber: ''
        };
    }
}
