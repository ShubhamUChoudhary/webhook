-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AddNewEmpDetails]  
(  
    @Name varchar (50), 
    @Lname varchar (50),
    @Email varchar (50),  
    @Address varchar (50)  
)  
as  
begin  
   Insert into employee(Name,Lname,Email,Address) values(@Name,@Lname,@Email,@Address)  
End 

Create procedure [dbo].[UpdateEmpDetails]  
(  
   @EmpId int,  
   @Name varchar (50),  
   @Lname varchar (50),
    @Email varchar (50),  
   @Address varchar (50)  
)  
as  
begin  
   Update employee   
   set Name=@Name,  
   Lname=@Lname,
   Email=@Email,
   Address=@Address  
   where EmpId=@EmpId  
End 

Create procedure [dbo].[DeleteEmpById]  
(  
   @EmpId int  
)  
as   
begin  
   Delete from employee where EmpId=@EmpId  
End 