import React, { useState, useEffect } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Paper, 
  Container,
  CircularProgress,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { saveFormProgress, getFormProgress } from '../services/formService';
import dlaQuestions from '../questions';

const filteredQuestions = dlaQuestions.filter(
  q => q.questionNumber >= 40 && q.questionNumber <= 72
);

const QuestionForm = () => {
  const { user } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Load user's saved answers
  useEffect(() => {
    const loadAnswers = async () => {
      if (user) {
        setLoading(true);
        const savedAnswers = await getFormProgress(user.uid);
        setAnswers(savedAnswers);
        
        // Find the first unanswered question
        const firstUnanswered = filteredQuestions.findIndex(
          q => !savedAnswers[q.questionNumber]
        );
        
        if (firstUnanswered !== -1) {
          setCurrentQuestionIndex(firstUnanswered);
        }
        
        // Set current answer if it exists
        const currentQ = filteredQuestions[currentQuestionIndex];
        if (currentQ && savedAnswers[currentQ.questionNumber]) {
          setAnswer(savedAnswers[currentQ.questionNumber]);
        }
        
        setLoading(false);
      }
    };
    
    loadAnswers();
  }, [user]);

  // Update answer when changing questions
  useEffect(() => {
    if (!loading) {
      const currentQ = filteredQuestions[currentQuestionIndex];
      setAnswer(answers[currentQ.questionNumber] || '');
    }
  }, [currentQuestionIndex, answers, loading]);

  const handleSave = async () => {
    if (!answer.trim()) {
      setNotification({
        open: true,
        message: 'Please provide an answer before saving',
        severity: 'error'
      });
      return;
    }
    
    setSaving(true);
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const success = await saveFormProgress(
      user.uid, 
      currentQuestion.questionNumber, 
      answer
    );
    
    if (success) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.questionNumber]: answer
      }));
      
      setNotification({
        open: true,
        message: 'Answer saved successfully',
        severity: 'success'
      });
    } else {
      setNotification({
        open: true,
        message: 'Failed to save answer',
        severity: 'error'
      });
    }
    
    setSaving(false);
  };

  const handleNext = async () => {
    await handleSave();
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
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

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const questionCount = filteredQuestions.length;
  const progress = Math.round(
    (Object.keys(answers).length / questionCount) * 100
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          DLA Form Assistant
        </Typography>
        <Typography variant="body1" gutterBottom>
          Completing questions {filteredQuestions[0].questionNumber}-
          {filteredQuestions[questionCount - 1].questionNumber} ({progress}% complete)
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Question {currentQuestion.questionNumber}: {currentQuestion.description}
        </Typography>
        
        <Card sx={{ mb: 3, bgcolor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Helpful Information:
            </Typography>
            <Typography variant="body2">
              {currentQuestion.helpfulInfo}
            </Typography>
          </CardContent>
        </Card>
        
        <TextField
          fullWidth
          multiline
          rows={12}
          variant="outlined"
          label="Your Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          sx={{ mb: 3, fontSize: '1.1rem' }}
          InputProps={{
            style: { fontSize: '1.1rem', lineHeight: '1.5' }
          }}
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button 
            variant="outlined" 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? <CircularProgress size={24} /> : 'Save'}
          </Button>
          
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleNext}
            disabled={saving || currentQuestionIndex === filteredQuestions.length - 1}
          >
            Next
          </Button>
        </Box>
      </Paper>

      {/* Question navigation */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Quick Navigation
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {filteredQuestions.map((q, index) => (
            <Button
              key={q.questionNumber}
              variant={currentQuestionIndex === index ? "contained" : "outlined"}
              color={answers[q.questionNumber] ? "success" : "primary"}
              size="small"
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {q.questionNumber}
            </Button>
          ))}
        </Box>
      </Paper>

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

export default QuestionForm; 