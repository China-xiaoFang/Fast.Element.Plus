const getTableDefaultSlots = (state) => {
  return {
    loading: state.loading,
    searchParam: state.searchParam,
    selected: state.selected,
    selectedList: state.selectedList,
    selectedListIds: state.selectedListIds,
    indeterminateSelectedListIds: state.indeterminateSelectedListIds
  };
};
export {
  getTableDefaultSlots
};
//# sourceMappingURL=table.type.mjs.map
