import { z } from 'zod';
let metadata = {};
metadata.getCurrentBalance = {
    name: 'get_current_balance',
    description: 'Get the current balance for a given address and network',
    params: z.object({
        address: z.string(),
        network: z.string()
    })
};
export default metadata;
//# sourceMappingURL=metadata.js.map