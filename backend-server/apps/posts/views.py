from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Post
from .serializers import PostSerializer
from .utils import AIService

#--------------------------------------------- GENERATE A NEW POST --------------------------------------------


@api_view(['POST'])
@permission_classes([IsAuthenticated])  # only authenticated users 
def create_post(request):
    print("request",request.data)
    #step 1 : get the user request : content and platform
    original_content = request.data.get('original_content', '')
    platform = request.data.get('platform', '')

    if platform not in ['linkedin', 'facebook', 'twitter(X)']:
        return Response({'error': 'Invalid platform'}, status=status.HTTP_400_BAD_REQUEST)

    #step 2 : generate the post using ai
    generated_content = AIService.generate_post(original_content, platform)
    print("generated_content", generated_content)

    #step 3 : save the results in the database
    post_data = {
        'original_content': original_content,
        'platform': platform,
        'generated_content': generated_content,
    }

    serializer = PostSerializer(data=post_data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response({'message': 'Post created successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#--------------------------------------------- GET POSTS BY USER --------------------------------------------

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_posts(request):
    #return the posts for the authenticated user ordered by date of creation
    user = request.user
    posts = Post.objects.filter(user=user).order_by('-created_at') 
    serializer = PostSerializer(posts, many=True) 
    return Response({'posts': serializer.data}, status=status.HTTP_200_OK)