import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  Alert
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAuth } from '../context/AuthContext';
import { getFormProgress, submitForm } from '../services/formService';
import dlaQuestions from '../questions';

const filteredQuestions = dlaQuestions.filter(
  q => q.questionNumber >= 40 && q.questionNumber <= 72
);

const Summary = () => {
  const { user } = useAuth();
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    const loadAnswers = async () => {
      if (user) {
        setLoading(true);
        const savedAnswers = await getFormProgress(user.uid);
        setAnswers(savedAnswers);
        setLoading(false);
      }
    };
    
    loadAnswers();
  }, [user]);

  const handleSubmit = async () => {
    setSubmitting(true);
    const success = await submitForm(user.uid);
    
    if (success) {
      setNotification({
        open: true,
        message: 'Form submitted successfully!',
        severity: 'success'
      });
    } else {
      setNotification({
        open: true,
        message: 'Failed to submit form',
        severity: 'error'
      });
    }
    
    setSubmitting(false);
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  const answeredQuestions = filteredQuestions.filter(
    q => answers[q.questionNumber]
  );
  
  const unansweredQuestions = filteredQuestions.filter(
    q => !answers[q.questionNumber]
  );

  const completionPercentage = Math.round(
    (answeredQuestions.length / filteredQuestions.length) * 100
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          DLA Form Summary
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have completed {answeredQuestions.length} out of {filteredQuestions.length} questions ({completionPercentage}%)
        </Typography>
        
        {unansweredQuestions.length > 0 && (
          <Box sx={{ mt: 2, p: 2, bgcolor: '#fff8e1', borderRadius: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="warning.main">
              You still have {unansweredQuestions.length} questions to answer:
            </Typography>
            <Typography variant="body2">
              {unansweredQuestions.map(q => q.questionNumber).join(', ')}
            </Typography>
          </Box>
        )}
        
        <Button
          variant="contained"
          color="primary"
          disabled={submitting || unansweredQuestions.length > 0}
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          {submitting ? <CircularProgress size={24} /> : 'Submit Final Answers'}
        </Button>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Your Answers
      </Typography>

      {answeredQuestions.length > 0 ? (
        answeredQuestions.map(question => (
          <Accordion key={question.questionNumber} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                <strong>Question {question.questionNumber}:</strong> {question.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Helpful Information:
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, fontSize: '0.9rem', color: 'text.secondary' }}>
                {question.helpfulInfo}
              </Typography>
              
              <Typography variant="subtitle2" gutterBottom>
                Your Answer:
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                {answers[question.questionNumber]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography variant="body1" color="text.secondary">
          You haven't answered any questions yet.
        </Typography>
      )}

      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Summary; 