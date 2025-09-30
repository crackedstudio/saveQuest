use starknet::ContractAddress;

#[starknet::interface]
pub trait IVault<TContractState> {
    fn create_pool(
        ref self: TContractState,
        _title: ByteArray,
        _collection_symbol: ByteArray,
        _contribution_amount: u256,
        _max_participants: u32,
        _deposit_token: ContractAddress,
        _yeild_contract: ContractAddress,
        _start_date: u64,
        _collection_uri: ByteArray
    ) -> u64;
}
