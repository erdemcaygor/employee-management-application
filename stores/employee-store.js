import { createStore } from 'zustand/vanilla';

const defaultEmployees = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    dateOfEmployment: '2023-01-15',
    dateOfBirth: '1990-05-20',
    phone: '(555) 123-4567',
    email: 'john.doe@company.com',
    department: 'Tech',
    position: 'Senior'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfEmployment: '2023-03-01',
    dateOfBirth: '1988-08-12',
    phone: '(555) 234-5678',
    email: 'jane.smith@company.com',
    department: 'Analytics',
    position: 'Medior'
  },
  {
    id: 3,
    firstName: 'Robert',
    lastName: 'Johnson',
    dateOfEmployment: '2022-11-30',
    dateOfBirth: '1992-12-03',
    phone: '(555) 345-6789',
    email: 'robert.johnson@company.com',
    department: 'Tech',
    position: 'Junior'
  },
  {
    id: 4,
    firstName: 'Maria',
    lastName: 'Garcia',
    dateOfEmployment: '2023-06-15',
    dateOfBirth: '1995-04-18',
    phone: '(555) 456-7890',
    email: 'maria.garcia@company.com',
    department: 'Analytics',
    position: 'Senior'
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Wilson',
    dateOfEmployment: '2022-09-01',
    dateOfBirth: '1987-11-25',
    phone: '(555) 567-8901',
    email: 'david.wilson@company.com',
    department: 'Tech',
    position: 'Medior'
  }
];

// You might want to add these as constants that can be used throughout the app
export const DEPARTMENTS = ['Tech', 'Analytics'];
export const POSITIONS = ['Junior', 'Medior', 'Senior'];

export const useEmployeeStore = createStore((set) => ({
  employees: defaultEmployees,
  
  setEmployees: (employees) => set({ employees }),
  
  addEmployee: (employee) => set((state) => ({ 
    employees: [employee, ...state.employees] 
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