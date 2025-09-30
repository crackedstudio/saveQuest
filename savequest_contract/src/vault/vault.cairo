#[starknet::contract]
pub mod SaveQuestVault {
    use starknet::SyscallResultTrait;
use starknet::get_caller_address;
use crate::constants::types::NFT_POSITION_CLASSHASH;
use starknet::syscalls::deploy_syscall;
use core::num::traits::Zero;
use savequest_contract::{constants::types::{Pool, Participant}, interfaces::{IVault::IVault, INftPosition::{INftPosition721Dispatcher, INftPosition721DispatcherTrait}}};
    use starknet::{ContractAddress, get_contract_address};
     use starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, Vec, VecTrait, MutableVecTrait, Map,  StorageMapWriteAccess, StoragePathEntry
    };

    #[storage]
    struct Storage {
        pool_count: u64,
        pools: Map<u64, Pool>,
        // pool_participants: Map<u64, Map<u64, Participant>>,
    }

    #[abi(embed_v0)]
    impl SaveQuestVaultImpl of IVault<ContractState> {
        
        fn create_pool(
            ref self: ContractState,
            _title: ByteArray,
            _collection_symbol: ByteArray,
            _contribution_amount: u256,
            _max_participants: u32,
            _deposit_token: ContractAddress,
            _yeild_contract: ContractAddress,
            _start_date: u64,
            _collection_uri: ByteArray
        ) -> u64 {

            let _pool_id: u64 = self.pool_count.read();
            let _caller: ContractAddress = get_caller_address();
            let _address_this: ContractAddress = get_contract_address();

            assert(_caller.is_non_zero(), 'Invalid caller address');
            assert(_contribution_amount > 0_256, 'Invalid amount');

            // deploy an nft instance for the pool.
            let _nft_position = deploy_syscall(
                NFT_POSITION_CLASSHASH.try_into().unwrap(),
                '',
                array![_address_this.into()].span(),
                true
            );

            // unwrap the contract address
            let (nft_position_address, _) = _nft_position.unwrap_syscall();

            // initialize the nft metadata
            INftPosition721Dispatcher{contract_address: nft_position_address}.initialize(_title, _collection_symbol, _collection_uri);

            // increment pool count
            let new_pool_id: u64 = _pool_id + 1_u64;

            // create pool intance
            let _new_pool: Pool = Pool {
                id: new_pool_id,
                creator: _caller,
                participants_count: _max_participants,
                contribution_amount: _contribution_amount,
                total_yield_distributed: 0_256,
                start_timestamp: _start_date,
                duration: 0,
                last_harvest_timestamp: 0,
                rounds_completed: 0_u32,
                deposit_token: _deposit_token,
                position_nft: _yeild_contract,
                is_active: true,
                yeild_contract: _yeild_contract
            };

            // make all state changes
            self.pools.write(new_pool_id, _new_pool);
            self.pool_count.write(new_pool_id);

            // emit createPool event
            
            new_pool_id
        }
    }
}
