from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import TokenError, RefreshToken

from django.contrib.auth import get_user_model
from .serializers import UserSerializer

User = get_user_model()

# ---------------------------- REGISTER A NEW USER VIEW ----------------------------

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    print("Request Data:", request.data)
    # step 1: verify if the user already exists
    if User.objects.filter(email=request.data.get('email')).exists():
        return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        # step 2: save the user infos in the database
        user = serializer.save()
        # step 3: create the refresh token
        refresh = RefreshToken.for_user(user)
        # step 4: return the user infos 
        return Response({
            'user': serializer.data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_user(request):
    try:
        print("Request Data:", request.data)
        # Get the refresh token from request data
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response({'error': 'Refresh token is required'}, status=status.HTTP_400_BAD_REQUEST)

        print("Refresh Token:", refresh_token)  # Debug: Check what token is being sent

        # Blacklist the refresh token
        token = RefreshToken(refresh_token)
        token.blacklist()

        return Response({'message': 'Successfully logged out'}, status=status.HTTP_200_OK)
    except TokenError:
        return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
