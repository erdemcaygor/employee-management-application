// ./pages/employee-list-view.js
import { LitElement, html, css } from 'lit';
import { formStyles, buttonStyles } from '../styles';

export class EmployeeForm extends LitElement {
  static get properties() {
    return {
      formData: { type: Object },
      errors: { type: Object },
    };
  }

  constructor() {
    super();
    this.formData = {
      firstName: '',
      lastName: '',
      dateOfEmployment: '',
      dateOfBirth: '',
      phone: '',
      email: '',
      department: '',
      position: ''
    };
    this.errors = {};
  }

  validateForm() {
    const errors = {};
    
    // Name validations
    if (this.formData.firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }
    if (this.formData.lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(this.formData.phone)) {
      errors.phone = 'Phone format should be (XXX) XXX-XXXX';
    }

    // Date validations
    const today = new Date();
    const birthDate = new Date(this.formData.dateOfBirth);
    const employmentDate = new Date(this.formData.dateOfEmployment);

    if (birthDate > today) {
      errors.dateOfBirth = 'Date of birth cannot be in the future';
    }
    if (employmentDate > today) {
      errors.dateOfEmployment = 'Date of employment cannot be in the future';
    }

    // Required field validations
    if (!this.formData.department) {
      errors.department = 'Please select a department';
    }
    if (!this.formData.position) {
      errors.position = 'Please select a position';
    }

    this.errors = errors;
    return Object.keys(errors).length === 0;
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.formData = {
      ...this.formData,
      [name]: value
    };
    // Clear error when user starts typing
    if (this.errors[name]) {
      this.errors = {
        ...this.errors,
        [name]: ''
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.dispatchEvent(new CustomEvent('employee-submit', {
        detail: this.formData,
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
    <div class="form-container">
    <form @submit=${this.handleSubmit}>
        <div class="form-row">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            .value=${this.formData.firstName}
            @input=${this.handleInput}
            class=${this.errors.firstName ? 'error' : ''}
            required
          >
          ${this.errors.firstName ? html`<div class="error-message">${this.errors.firstName}</div>` : ''}
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            .value=${this.formData.lastName}
            @input=${this.handleInput}
            class=${this.errors.lastName ? 'error' : ''}
            required
          >
          ${this.errors.lastName ? html`<div class="error-message">${this.errors.lastName}</div>` : ''}
        </div>
        </div>
        <div class="form-row">
        <div class="form-group">
          <label for="dateOfEmployment">Date of Employment</label>
          <input 
            type="date" 
            id="dateOfEmployment" 
            name="dateOfEmployment"
            .value=${this.formData.dateOfEmployment}
            @input=${this.handleInput}
            class=${this.errors.dateOfEmployment ? 'error' : ''}
            required
          >
          ${this.errors.dateOfEmployment ? html`<div class="error-message">${this.errors.dateOfEmployment}</div>` : ''}
        </div>

        <div class="form-group">
          <label for="dateOfBirth">Date of Birth</label>
          <input 
            type="date" 
            id="dateOfBirth" 
            name="dateOfBirth"
            .value=${this.formData.dateOfBirth}
            @input=${this.handleInput}
            class=${this.errors.dateOfBirth ? 'error' : ''}
            required
          >
          ${this.errors.dateOfBirth ? html`<div class="error-message">${this.errors.dateOfBirth}</div>` : ''}
        </div>
        </div>
        <div class="form-row">
        <div class="form-group">
          <label for="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            .value=${this.formData.phone}
            @input=${this.handleInput}
            class=${this.errors.phone ? 'error' : ''}
            required
          >
          ${this.errors.phone ? html`<div class="error-message">${this.errors.phone}</div>` : ''}
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            .value=${this.formData.email}
            @input=${this.handleInput}
            class=${this.errors.email ? 'error' : ''}
            required
          >
          ${this.errors.email ? html`<div class="error-message">${this.errors.email}</div>` : ''}
        </div>
        </div>
        <div class="form-row">
        <div class="form-group">
          <label for="department">Department</label>
          <select 
            id="department" 
            name="department"
            .value=${this.formData.department}
            @change=${this.handleInput}
            class=${this.errors.department ? 'error' : ''}
            required
          >
            <option value="">Select Department</option>
            <option value="Analytics">Analytics</option>
            <option value="Tech">Tech</option>
          </select>
          ${this.errors.department ? html`<div class="error-message">${this.errors.department}</div>` : ''}
        </div>

        <div class="form-group">
          <label for="position">Position</label>
          <select 
            id="position" 
            name="position"
            .value=${this.formData.position}
            @change=${this.handleInput}
            class=${this.errors.position ? 'error' : ''}
            required
          >
            <option value="">Select Position</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
          ${this.errors.position ? html`<div class="error-message">${this.errors.position}</div>` : ''}
        </div>
        </div>
        <div class="form-submit-btn">
            <button class="primary-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
    `;
  }

  static styles = [
    formStyles,
    buttonStyles
  ];
}

customElements.define('employee-form', EmployeeForm);
