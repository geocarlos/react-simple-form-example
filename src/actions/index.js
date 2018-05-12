export const NEW_FRIEND = 'NEW_FRIEND';
export const EDIT_FRIEND = 'EDIT_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export function newFriend(friend = {}){
  return {
    type: NEW_FRIEND,
    friend
  }
}

export function editFriend(friend = {}){
  return {
    type: EDIT_FRIEND,
    friend
  }
}

export function deleteFriend(friend = {}){
  return {
    type: DELETE_FRIEND,
    friend
  }
}
