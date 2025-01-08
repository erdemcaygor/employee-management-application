import { create } from 'zustand';

export const useEmployeeStore = create((set) => ({
  employees: [],
  
  setEmployees: (employees) => set({ employees }),
  
  addEmployee: (employee) => set((state) => ({ 
    employees: [...state.employees, employee] 
  })),
  
  updateEmployee: (id, updatedEmployee) => set((state) => ({
    employees: state.employees.map(emp => 
      emp.id === id ? { ...emp, ...updatedEmployee } : emp
    )
  })),
  
  deleteEmployee: (id) => set((state) => ({
    employees: state.employees.filter(emp => emp.id !== id)
  }))
})); 