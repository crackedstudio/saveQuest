#[derive(Drop, Serde, starknet::Store)]
struct VaultInfo {
    contribution_amount: u256,
    max_participants: u256,
    current_participants: u256,
    total_deposited: u256,
    yeilds_generated: u256,
    current_round: u256,
    created_at: u64,
    is_active: bool,
}

pub const SAVEQUEST_CLASSHASH: felt252 = 0x0123;
