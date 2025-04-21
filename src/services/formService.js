import { db } from '../firebase';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  serverTimestamp 
} from 'firebase/firestore';

// Save user's progress on the form
export const saveFormProgress = async (userId, questionNumber, answer) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      // Create new user document if it doesn't exist
      await setDoc(userDocRef, {
        answers: {
          [questionNumber]: answer
        },
        lastUpdated: serverTimestamp(),
        createdAt: serverTimestamp()
      });
    } else {
      // Update existing user document
      await updateDoc(userDocRef, {
        [`answers.${questionNumber}`]: answer,
        lastUpdated: serverTimestamp()
      });
    }
    
    return true;
  } catch (error) {
    console.error('Error saving form progress:', error);
    return false;
  }
};

// Get user's form progress
export const getFormProgress = async (userId) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      return userDoc.data().answers || {};
    }
    
    return {};
  } catch (error) {
    console.error('Error getting form progress:', error);
    return {};
  }
};

// Check if user has completed all required questions
export const checkFormCompletion = (answers, requiredQuestions) => {
  if (!answers) return false;
  
  for (const questionNumber of requiredQuestions) {
    if (!answers[questionNumber]) {
      return false;
    }
  }
  
  return true;
};

// Submit final form for review
export const submitForm = async (userId) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    
    await updateDoc(userDocRef, {
      submitted: true,
      submittedAt: serverTimestamp()
    });
    
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
}; 