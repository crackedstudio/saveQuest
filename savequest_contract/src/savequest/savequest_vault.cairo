#[starknet::contract]
pub mod SavequestVault {

    #[storage]
    struct Storage {
        owner: felt252,
        vault_address: felt252,
    }
    
}