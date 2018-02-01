export default interface IJob {
jobId: string;
title: string;
company: {
name: string,
address: string,
logo: string,
reportTo: string
};
wagePerHourInCents: number;
shifts: Array<any>;
branch: string;
branchPhoneNumber: string;
}
