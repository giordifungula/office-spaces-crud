import Dexie from 'dexie';

interface IOfficeCreate {
	officeName: string;
	physicalAddress: string;
	emailAddress: string;
	phoneNumber: string;
	capacity: number;
	officeColor: string;
}

export interface IOfficeRead extends IOfficeCreate {
	id?: number;
}

export interface IStaffRead extends IStaffCreate {
	id?: number;
}

interface IStaffCreate {
	firstName: string;
	lastName: string;
	avatar: string;
	// dummy relationships
	officeId: number;
}

export class OfficeKeeperDB extends Dexie {
	offices!: Dexie.Table<IOfficeRead>;
	staffs!: Dexie.Table<IStaffRead, number>;

	constructor() {
		super('officeKeeperDB');
		this.version(1).stores({
			offices:
				'++id,officeName,physicalAddress,emailAddress,phoneNumber,capacity,officeColor',
			staffs: '++id,firstName,lastName,avatar,officeId',
		});
		this.offices = this.table('offices');
		// this.staffs = this.table('staffs');
	}
}

const DB = new OfficeKeeperDB();
export { DB };
