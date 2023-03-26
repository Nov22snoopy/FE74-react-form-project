const InitialState = {
  studentList: [
    {id: 'st01', name: "Nguyen Quang Long", email: "nguyenquanglong@gmail.com", phoneNumber: '512345674' },
    {id: 'st02', name: "Nguyen Quang Vu", email: "nguyenquangvu@gmail.com", phoneNumber: '923189979' }
  ],
  editedStudent: null,
  keyword: "",
 
}

const studentReducer = (state = InitialState, action) =>{
  switch (action.type) {
    case "SUBMIT_STUDENT": {
      const studentList = [...state.studentList];
      const index = studentList.findIndex((student)=>student.id === action.payload.id);
      if(index !==-1) {
        studentList[index] =  action.payload
      }
      else {
        studentList.push(action.payload)
      }
      state.studentList = studentList;
      state.editedStudent = null;
      return {...state}
    }  

    case "DELETE_STUDENT":{
      const studentList = [...state.studentList];
      const index = studentList.findIndex((student)=> student.id === action.payload);
      if(index!==-1) {
        studentList.splice(index,1)
      }
      state.studentList =studentList;
      return {...state}
    }

    case "EDIT_STUDENT": {
      state.editedStudent = action.payload;
      return {...state};
    }
    case "SEARCH_USER": {
      state.keyword = action.payload;
      return { ...state };
    }

  
    default:
      return {...state};
  }
}

export {studentReducer}