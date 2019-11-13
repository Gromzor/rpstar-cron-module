import { Module, RunnableType, FieldType, TriggerExecutionResult } from '@rpstar/sdk';
export const myModule: Module = {
    name: 'cron-module',
    author: 'rpstar',
    icon: 'https://rpstar-stg.uksouth.cloudapp.azure.com/assets/images/logo.png',
    triggers: [{
        displayName: 'Schedule',
        name: 'cron-schedule',
        type: RunnableType.Trigger,
        inputs: [
            {
                fieldType: FieldType.String,
                defaultValue: '* * 0/1 * * *',
                displayName: 'Cron expression trigger',
                name: 'cron-expression',
                required: true,
                isValid: (value) => {
                    return new Promise<boolean>((resolve, reject) => {
                        if (true) {
                            resolve(true);
                        }
                        else {
                            reject(false);
                        }
                    });
                }
            }
        ],
        outputs: [],
        canExecute: (input) => {
            return new Promise<TriggerExecutionResult<any>>((resolve, reject)=>{
                    resolve({canExecute:true});
            });
        }
    }],
    actions: []
}