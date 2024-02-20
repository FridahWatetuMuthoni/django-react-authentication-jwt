from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import Notes
from .serializers import NotesSerializer
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

@api_view(['GET'])
def get_routes(request):
    routes = [
        #give authentication details and get back refresh and access tokens
        '/api/token', 
        #give refresh tokens and get back a new access token
        '/api/token/refresh'
    ]
    # safe=False means that we can render out anything more that just a dictonary
    return Response(routes)

@api_view(['GET','POST'])
#@permission_classes([IsAuthenticated])
def notes_list(request):
    
    if request.method == 'GET':
        notes = Notes.objects.all()
        serializer = NotesSerializer(notes, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        request.data['author'] = request.user.id
        serializer = NotesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def notes_detail(request, pk):
    note = get_object_or_404(Notes, pk=pk)
    
    if request.method == 'GET':
        serializer = NotesSerializer(note)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = NotesSerializer(instance=note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


